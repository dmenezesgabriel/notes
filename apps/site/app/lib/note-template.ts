import type { Note, TocEntry } from '@notes/content';

export interface NoteBacklink {
  id: string;
  slug: string;
  title: string;
}

export interface NoteTemplateState {
  hasSidebar: boolean;
  hasBacklinks: boolean;
}

export function getNoteTemplateState(
  toc: TocEntry[],
  backlinks: NoteBacklink[],
): NoteTemplateState {
  return {
    hasSidebar: toc.length > 2,
    hasBacklinks: backlinks.length > 0,
  };
}

export function resolveNoteBacklinks(
  backlinkIds: string[],
  notesById: Record<string, Note> | undefined,
): NoteBacklink[] {
  return backlinkIds.flatMap((id) => {
    const note = notesById?.[id];
    return note
      ? [
          {
            id,
            slug: note.slug,
            title: note.title,
          },
        ]
      : [];
  });
}
