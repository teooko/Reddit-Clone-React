import { Article } from './Article'
import { Aside } from './Aside'

export const Content = () => {
    return (
        <div className='Content'>
            <Article />
            <Aside />
        </div>
    )
}