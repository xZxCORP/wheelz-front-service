import Delimiter from '@editorjs/delimiter';
import EditorJS, { type BlockToolConstructable, type OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import { useEffect, useRef } from 'react';

type EditorFieldProps = {
  name: string;
  value?: OutputData;
  onChange: (data: OutputData) => void;
};

export const EditorField = ({ name, value, onChange }: EditorFieldProps) => {
  const holder = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!holder.current) return;

    const editor = new EditorJS({
      holder: holder.current,
      data: value || undefined,
      tools: {
        header: Header,
        paragraph: Paragraph,
        quote: Quote,
        delimiter: Delimiter,
        list: {
          class: EditorjsList as unknown as BlockToolConstructable,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
      },
      autofocus: true,
      async onChange(api) {
        const data = await api.saver.save();
        onChange(data);
      },
    });

    editorRef.current = editor;

    return () => {
      editor.destroy();
    };
  }, [onChange, value]);

  return <div id={name} ref={holder} className="min-h-[200px] rounded border p-3" />;
};
