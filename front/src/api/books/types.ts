import { Book } from 'shared/types/Book';
import { Metadata } from 'shared/types/Metadata';

export type BooksPayload = {
  data: Book[];
  metadata: Metadata;
};
