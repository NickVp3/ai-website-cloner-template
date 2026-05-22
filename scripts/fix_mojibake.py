from pathlib import Path

FIXES = {
    'Ã¡': 'á', 'Ã©': 'é', 'Ã­': 'í', 'Ã³': 'ó', 'Ãº': 'ú', 'Ã±': 'ñ',
    'Ã': 'Á', 'Ã‰': 'É', 'Ã“': 'Ó', 'Ãš': 'Ú', 'Ã‘': 'Ñ',
    'Ã¼': 'ü', 'Ã§': 'ç', 'Ã¯': 'ï', 'Ã—': '×',
    'Â¡': '¡', 'Â¿': '¿', 'Â°': '°', 'Âª': 'ª', 'Â×': '×',
    'Ã(c)': 'é', 'Ã±': 'ñ', 'Ã¡s': 'ás', 'Ã©s': 'és',
    'Ã±a': 'ña', 'Ã±o': 'ño', 'Ã±e': 'ñe', 'Ã±i': 'ñi',
    'Â(c)': '©',
}

root = Path(__file__).resolve().parent.parent / 'src'
files = list(root.rglob('*.ts')) + list(root.rglob('*.tsx'))
fixed = []
for f in files:
    text = f.read_text(encoding='utf-8')
    if any(key in text for key in FIXES):
        new = text
        for key, value in FIXES.items():
            new = new.replace(key, value)
        if new != text:
            f.write_text(new, encoding='utf-8')
            fixed.append(str(f))

print('fixed files:')
for p in fixed:
    print(p)
