import { BallTriangle } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import "../styles/ResultComponent.css"

import { addToHistory } from '../redux/actions/historyAction';

export const ResultComponent = () => {
    const obj = useSelector(state => state.fetchReducer)

    const dispatch = useDispatch();
    if (obj.success) {
        dispatch(addToHistory(obj.data[0].word));
    }

    return (
        <div id="result-section">
            {obj.loading && <BallTriangle color='#282826' />}
            {obj.success &&
                obj.data.map((item) => {
                    return <div className='result'>
                        <h3>{item.word}</h3>
                        {
                            item.phonetics.map((phonetic) => {
                                return phonetic.audio !== "" && (
                                    <div>
                                        <p>{phonetic.text}</p>
                                        <audio src={phonetic.audio} controls={true}></audio>
                                    </div>
                                )
                            })
                        }
                        {
                            item.meanings.map((meaning) => {
                                return (
                                    <div>
                                        <h3>{meaning.partOfSpeech}</h3>
                                        {
                                            meaning.definitions.map((definition) => {
                                                return <p>-> {definition.definition}</p>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                })
            }
            {
                obj.error &&
                <div>
                    <h2>{obj.error.title}</h2>
                    <h3>{obj.error.message}</h3>
                </div>
            }
        </div>
    )
}