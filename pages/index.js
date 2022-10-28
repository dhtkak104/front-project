import HeadInfo from '../components/HeadInfo'
import { Header } from 'semantic-ui-react'

export default function Home() {
  return (
    <div>
      <HeadInfo />
      <Header as="h3">Home</Header>
    </div>
  )
}