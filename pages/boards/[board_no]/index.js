import Axios from "axios";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import Board from "../../../components/Board";

export default function Index({ board }) {
  const router = useRouter();
  
  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {board && (
        <Board initBoard={board} />
      )}
    </>
  );
}

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl + 'boards'; 
  const res = await Axios.get(apiUrl);
  const boards = res.data.data;
  const boardNoList = boards.map(board => board.board_no);
  const paths = boardNoList.map(boardNo => {
    return {
        params: {board_no: boardNo.toString()}
    }
  });
  
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const boardNo = context.params.board_no;
  const apiUrl = process.env.apiUrl + `boards/${boardNo}`;
  const res = await Axios.get(apiUrl);
  const board = res.data.data;

  return {
    props: {
      board
    },
    revalidate: 6000
  }
}