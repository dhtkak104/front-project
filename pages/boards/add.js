import Axios from "axios";
import { useRouter } from "next/router";
import HeadInfo from "../../components/HeadInfo";

export default function Add() {
  const info = {title: '게시판 추가'};
  const router = useRouter();
  
  async function addBoard(e) {
    e.preventDefault();    
    
    const formData = {
      title: event.target.title.value,
      contents: event.target.contents.value
    };
    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + `boards`;
    const res = await Axios.post(apiUrl, formData);
    if(200 <= res.data.status < 300) {
        router.push('/boards');
    } else {
      alert(res.data.msg);
    }
  }

  return (
    <>
        <HeadInfo info={info} />  
        <div style={{ display:"flex", padding:40 }}>
        <form onSubmit={addBoard}>
            <input name="title" type="text"/>
            <input name="contents" type="text"/>
            <button type="submit">추가</button>
        </form>
        </div>
    </>
  );
}
