import {
  mkdtempSync,
  cpSync,
  symlinkSync,
  writeFileSync,
  rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

// Compila uma cópia descartável. Nenhuma rota é criada no projeto original.
const root = resolve(import.meta.dirname, '..');
const temporary = mkdtempSync(join(tmpdir(), 'unixcard-base-'));
for (const name of [
  'app',
  'components',
  'styles',
  'data',
  'lib',
  'public',
  'package.json',
  'tsconfig.json',
  'next-env.d.ts',
  'next.config.ts',
  'postcss.config.mjs',
]) {
  cpSync(join(root, name), join(temporary, name), { recursive: true });
}
symlinkSync(
  join(root, 'node_modules'),
  join(temporary, 'node_modules'),
  'junction',
);
writeFileSync(
  join(temporary, 'app/page.tsx'),
  `import { Button, Container, SectionChip, SectionTitle } from '@/components/ui';
export default function Verification() {
  return <Container><SectionChip>Soluções</SectionChip><SectionTitle highlight=" você">Feito para</SectionTitle><SectionTitle as="h3">Teste</SectionTitle><Button disabled>Teste</Button><Button href="/" variant="outline">Link</Button></Container>;
}`,
);
try {
  const result = spawnSync(
    process.execPath,
    [join(root, 'node_modules/next/dist/bin/next'), 'build', '--webpack'],
    {
      cwd: temporary,
      stdio: 'inherit',
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
      detached: false,
    },
  );
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
