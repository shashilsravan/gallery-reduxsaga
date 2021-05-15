import React, { useEffect } from 'react'
import {getPictures, postPictures, 
    deletePictures, editPictures} from '../redux/actions/pictures'
import {useSelector, useDispatch} from 'react-redux'
import TopBar from './fragments/TopBar'
import FormContainer from './fragments/FormContainer';
import ImagesContainer from './fragments/ImagesContainer';
import Loader from './helpers/Loader';
import Footer from './fragments/Footer';

export default function UsersComponent() {
    const dispatch = useDispatch()

    const pictures = useSelector(state => state.pictures.pictures.data)
    const loading = useSelector(state => state.pictures.loading)

    const postSuccess = useSelector(state => state.postPictures.success)
    const deleteSuccess = useSelector(state => state.deletePictures.success)
    const editSuccess = useSelector(state => state.editPictures.success)

    useEffect(() => {
        dispatch(getPictures());
    }, [dispatch, deleteSuccess, postSuccess, editSuccess])

    const handlePost = (url, name) => {
        dispatch(postPictures( {name, url} ))
    }

    const handleDelete = (id) => {
        dispatch(deletePictures(id))
    }

    const handleEdit = (body, id) => {
        dispatch(editPictures({ body, id }))
    }
    return (
        <div>
            <TopBar />
            <FormContainer handlePost={handlePost} />
            {loading ? <Loader /> : <ImagesContainer handleEdit={handleEdit}
            handleDelete={handleDelete} items={pictures} />}
            <Footer />
        </div>
    )
}

// DevOps
// Amazon web services
// Data science with python
// Block chain & crypto
