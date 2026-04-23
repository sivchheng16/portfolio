import os
import re

def fix_table_nesting(content):
    # Fix <TableHead><TableRow><TableHeader> -> <TableHeader><TableRow><TableHead>
    
    # 1. Replace <TableHead> with <TableHeader> if it contains <TableRow>
    # We do this carefully using regex
    content = re.sub(r'<TableHead>\s*<TableRow>', r'<TableHeader>\n              <TableRow>', content)
    
    # 2. Replace </TableHead> with </TableHeader> if it follows </TableRow>
    content = re.sub(r'</TableRow>\s*</TableHead>', r'</TableRow>\n            </TableHeader>', content)
    
    # 3. Replace <TableHeader> with <TableHead> if it's inside <TableRow>
    # This is tricky because TableHeader is also used for the thead
    # But in the broken code, TableHeader is used for th
    content = re.sub(r'<TableRow>\s*<TableHeader>', r'<TableRow>\n                <TableHead>', content)
    content = re.sub(r'<TableHeader>(.*?)</TableHeader>', r'<TableHead>\1</TableHead>', content)
    
    # Clean up double newlines or spacing issues from the above replacements
    content = re.sub(r'\n\s*\n', r'\n', content)
    
    return content

def fix_markdown_leakage(content):
    # Remove raw markdown headers inside CodeBlocks or strings
    # Pattern: ### Header
    content = re.sub(r'### (.*?)\n', r'\\n\1\\n', content) # This might be too aggressive if outside strings
    
    # Actually, let's target specific known patterns
    content = content.replace('### Self-Closing Tags', 'Self-Closing Tags')
    content = content.replace('- **Parts of an Element:**', 'Parts of an Element:')
    
    return content

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = fix_table_nesting(content)
    # new_content = fix_markdown_leakage(new_content) # Be careful with this
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed: {filepath}")

def main():
    root_dir = '/home/chheng/project/app/my-portfolio/src/lessons'
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.tsx'):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
