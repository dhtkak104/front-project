import HeadInfo from "./HeadInfo";
import { useRouter } from "next/router";
import BoardStyles from "../styles/Board.module.css";
import { Button, Header } from "semantic-ui-react";
import Axios from 'axios';
import { useState } from "react";

export default function Item({initBoard}) {
  const [board, setBoard] = useState(initBoard);
  const { board_no, title, contents, image_link, insert_ts } = board;
  const info = {title};

  const router = useRouter();
  
  async function updageBoard(e, data) {
    e.preventDefault();
    const formData = {
      board_no: 5,
      title: 'test',
      contents: 'test'
    };
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + `boards/${board_no}`;
    const res = await Axios.put(apiUrl, formData);

    if(200 <= res.data.status < 300) {
      setBoard(formData);
    } else {
      alert(res.data.msg);
    }
  }

  async function deleteBoard(e) {
    e.preventDefault();    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + `boards/${board_no}`;
    const res = await Axios.delete(apiUrl);
    if(200 <= res.data.status < 300) {
      router.push('/boards');
    } else {
      alert(res.data.msg);
    }
  }

  return (
    <div>
      <HeadInfo info={info} />
      <>
        <div className={BoardStyles.wap}>
          <div className={BoardStyles.img_item}>
              <img src={image_link} alt={title}></img>
          </div>
          <div className={BoardStyles.info_item}>
            <strong className={BoardStyles.tit_item}>{title}</strong>
            <span className={BoardStyles.txt_date}>{insert_ts}</span>
            <Button onClick={updageBoard} color="orange">수정</Button>
            <Button onClick={deleteBoard} color="red">삭제</Button>
          </div>
        </div>
        <p style={{ paddingBottom:20, fontsize:18 }}>{contents}</p>
      </>
    </div>
  )
}