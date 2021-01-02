import { Link } from 'react-router-dom'
import { Fragment, lazy, useState, useEffect, useRef } from 'react'

import { styles } from './index.styles'
import { StoriesProps } from './index.interfaces'

const HTML = lazy(() => import('@modules/components/html/Common'))
const PlusIcon = lazy(() => import('@modules/components/icons/Plus'))

function FriendStories () {
    const [ stories, setStories ] = useState<Array<StoriesProps>>([])
    const handleGetStories = useRef(async () => {
        const story = await import('@assets/story.jpg')
        const storyTwo = await import('@assets/story-2.jpg')

        setStories((prevStories: Array<StoriesProps>) => ([
            ...prevStories,
            { id: '000001', name: 'John Rey Baylen', images: [ story.default ] },
            { id: '000002', name: 'Clare Real', images: [ storyTwo.default ] }
        ]))
    })
    const friendStoriesElement = (
        <HTML tag="ul" style={ styles.ul }>
            { stories.map(({ id, name, images }: StoriesProps, index: number) => {
                const [ imageToShow ] = images

                return (
                    <HTML tag="li" key={ id } style={ styles.li }>
                        <Link className="story-link" to={ `/stories/${ id }` } style={ styles.story }>
                            <HTML tag="img" src={ imageToShow } style={ styles.img(index) } />
                            { !index ? (
                                <HTML tag="span" style={ styles.createContainer }>
                                    <HTML tag="span" style={ styles.plusIcon }>
                                        <PlusIcon width={ 28 } height={ 28 } />
                                    </HTML>
                                    <HTML tag="span" children="Create a Story" style={ styles.create } />
                                </HTML>
                            ) : '' }
                            { index ? (
                                <Fragment>
                                    <HTML tag="span" style={ styles.overlay } />
                                    <HTML tag="span" children={ name } style={ styles.name } />
                                </Fragment>
                            ) : '' }
                            <HTML tag="span" className="story-hover" style={ styles.storyHover } />
                        </Link>
                    </HTML>
                )
            }) }
        </HTML>
    )

    useEffect(() => {
        handleGetStories.current()
    }, [])

    return friendStoriesElement
}

export default FriendStories