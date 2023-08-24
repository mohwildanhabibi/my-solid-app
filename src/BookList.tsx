import { For } from "solid-js";
import { Book } from "./App";

interface bookListProps {
  books: Book[];
}

export function BookList(props: bookListProps) {
    const totalBooks = () => props.books.length;
    
    return (
      <>
        <h2>My Books ({totalBooks()})</h2>
        <ul>
          <For each={props.books}>
              {(book) => {
                  return (
                      <li>
                          {book.title}
                          <span style={{"font-style": "italic"}}> {book.author}</span>
                      </li>
                  )
              }}
          </For>
        </ul>
      </>
    );
  }