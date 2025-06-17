import React, { useContext, useEffect, useState } from 'react'
import { UserContextAPI } from '../../context/UserContext'
import { Accordion, Spinner } from 'react-bootstrap'
import { fetchData } from '../../services/AllAPI'


const AllQuestions = () => {

    const { boxval, setBoxVal } = useContext(UserContextAPI)

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const fetchGetQuestionAnswers = async () => {
        try {
            const { data } = await fetchData()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    let perPage = 7
    let totalPages = Math.trunc(data?.length / perPage)

    let lastIndex = currentPage * perPage
    let firstIndex = lastIndex - perPage

    let slicedArray = data?.slice(firstIndex, lastIndex)

    const forwardClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
       
        }
    }

    const onBackWardClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }

    }



    useEffect(() => {
        fetchGetQuestionAnswers()
    }, [])





    return (
        <div>
           {slicedArray.length>0? <div className='btn-option-div'>
                <button onClick={() => setBoxVal("patterns")}>View patterns <i class="fa-solid fa-arrow-right"></i></button>
            </div>:""}
            {slicedArray?.length > 0 ?
                slicedArray?.map((a, key) => (
                    <Accordion className="custom-accordion mb-3" key={key}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><p>{a?.question}</p><img id='img-pattern' src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" /></Accordion.Header>
                            <Accordion.Body>
                                {a?.answer}

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                ))
                : <div className='text-center'> <Spinner style={{ color: 'white', marginTop: '200px' }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div>

            }
             {slicedArray.length>0? <div className='arrow-btn-div'>
                <button onClick={onBackWardClick}><i class="fa-solid fa-arrow-left"></i></button>
                <h6><span>{currentPage}</span> of <span>{totalPages}</span></h6>
                <button onClick={forwardClick}><i class="fa-solid fa-arrow-right"></i></button>

            </div>:""}
        </div>
    )
}

export default AllQuestions
