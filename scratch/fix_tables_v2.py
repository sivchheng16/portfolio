import os
import re

def fix_table_structure(content):
    # This function needs to be VERY specific to avoid breaking things.
    
    # 1. Fix the main container: <TableHead> -> <TableHeader>
    # ONLY if it contains <TableRow>
    # We use a non-greedy match to find TableHead blocks that contain TableRow
    def replace_table_head(match):
        inner = match.group(1)
        if '<TableRow>' in inner:
            return f'<TableHeader>{inner}</TableHeader>'
        return match.group(0) # No change

    content = re.sub(r'<TableHead>(.*?)</TableHead>', replace_table_head, content, flags=re.DOTALL)

    # 2. Fix the header cells: <TableHeader> -> <TableHead>
    # ONLY if they are inside a <TableHeader> block or just generally if they aren't the container
    # In the broken state, many files have <TableHeader>Cell Content</TableHeader>
    content = content.replace('<TableHeader>', 'TEMP_OPEN')
    content = content.replace('</TableHeader>', 'TEMP_CLOSE')
    
    # Correct the outer container back to TableHeader (if it was originally TableHead)
    # This is getting complex. Let's try a different approach.
    
    return content

# Simpler, safer replacements
def safe_fix(content):
    # Fix the broken state created by the first run: <TableHead>Text</TableHeader>
    content = content.replace('<TableHead>', 'TEMP_TH_OPEN')
    content = content.replace('</TableHead>', 'TEMP_TH_CLOSE')
    content = content.replace('<TableHeader>', 'TEMP_THEAD_OPEN')
    content = content.replace('</TableHeader>', 'TEMP_THEAD_CLOSE')
    
    # We want:
    # Outer: <TableHeader>...</TableHeader>
    # Inner: <TableHead>...</TableHead>
    
    # In the current BROKEN state (mostly):
    # Outer was <TableHead>, became <TableHeader> (maybe)
    # Inner was <TableHeader>, became <TableHead> (maybe)
    
    # Let's just do a clean slate regex for the whole table block if possible, 
    # but that's risky.
    
    # Let's target the exact broken pattern: <TableHead>.*</TableHeader>
    content = re.sub(r'<TableHead>(.*?)</TableHeader>', r'<TableHead>\1</TableHead>', content)
    
    return content

def final_fix(content):
    # The most common broken pattern after my first script:
    # <TableHeader>
    #   <TableRow>
    #     <TableHead>Path</TableHeader>  <-- WRONG CLOSING TAG
    
    # Fixes cells
    content = re.sub(r'<TableHead>(.*?)</TableHeader>', r'<TableHead>\1</TableHead>', content)
    
    # Ensure TableHeader is closed correctly
    # If we have <TableHeader> and then </TableHead> at the end of the block, it's wrong
    
    return content

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = final_fix(content)
    
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
