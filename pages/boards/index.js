import HeadInfo from '../../components/HeadInfo';
import { Divider, Grid, Header } from 'semantic-ui-react';
import BoardsStyles from '../../styles/Boards.module.css';
import Link from 'next/link';
import Axios from 'axios';

export default function Boards({ boards }) {
  const info = {title: '게시판'};
  return (
    <div>
      <HeadInfo info={info} />
      <>
        <Header as="h3" style={{ paddingTop:40 }}>
            게시판
        </Header>
        <Link href='/boards/add' as={`/boards/add`}>
          <a>추가</a>
        </Link>
        <Divider />
        <div>
          <Grid columns={3}>
            <Grid.Row>
              {boards.map(board => (
                <Grid.Column key={board.board_no}>  
                  <Link href='/boards/[board.board_no]' as={`/boards/${board.board_no}`}>
                    <a>
                      <div className={BoardsStyles.warp}>
                        <img
                          src={board.image_link}
                          alt={board.title}
                          className={BoardsStyles.img_item}
                        />
                        <strong className={BoardsStyles.tit_item}>{board.title}</strong>
                      </div>
                    </a>
                  </Link>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </div>
      </>
    </div>
  )
}

export async function getStaticProps(){
  const apiUrl = process.env.apiUrl + 'boards';
  const res = await Axios.get(apiUrl);
  const boards = res.data.data;
  return {
    props: {boards}, revalidate: 6000
  }
}