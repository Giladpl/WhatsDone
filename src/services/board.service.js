import {asyncStorageService} from './async-storage.service.js'
import {storageService} from './storage.service.js'
import {utilService} from './util.service.js'
// import {httpService} from './http.service.js'

const KEY = 'boardsDB';

export const boardService = {
    query,
    getById,
    remove,
    save,
    getEmptyBoard,
    getEmptyTask,
    getEmptyGroup
}

_createBoards() 

function query() {
    // return httpService.get(`board/`)
    return asyncStorageService.query(KEY)
}

function getById(id) {
    // return httpService.get(`board/${id}`)
    return asyncStorageService.get(KEY, id);
}

function remove(id) {
    // return httpService.delete(`board/${id}`)
    return asyncStorageService.remove(KEY, id);
}

function save(board) {
    // if (board._id) {
    //     return httpService.put(`board/${board._id}`, board)
    // } else {
    //     return httpService.post(`toy/`, board)
    // }
    const savedBoard = (board._id) ? asyncStorageService.put(KEY, board) : asyncStorageService.post(KEY, board)
    return savedBoard;
}

function getEmptyBoard() {
    return {
        name,
        price,
        type,
        createdAt: Date.now(),
        inStock: true
    }
}

function getEmptyTask(){
    return {
        id: utilService.makeId(),
        title: null,
        members: [],
        byMember: {},
        comments: [],
        statusId: 'sNew',
        priorityId: 'pNew',
        createdAt: Date.now(),
        dueDate: Date.now(),
    }
}

function getEmptyGroup(){
    return {
        id: utilService.makeId(),
        title: 'Empty Group',
        tasks: [],
        color: '#8D0000',
    }
        
}

function _createBoards() {
    let boards = storageService.load(KEY)
    if (!boards || !boards.length) {
        boards = [
            _createBoard('b101', 'board1'),
            _createBoard('b102', 'board2'),
            _createBoard('b103', 'board3'),
        ]
        storageService.store(KEY, boards)
    }
    return boards;
}

function _createBoard(_id, title) {
    return {
        _id,
        title,
        description: 'Software Development Life Cycle',
        createdAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Shraga Puk',
            imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
        },
        statuses: [
            {
                id: 's101',
                title: 'Done',
                color: '#00ca72',
            },
            {
                id: 's102',
                title: 'Stuck',
                color: '#e44258',
            },
            {
                id: 's103',
                title: 'Working on it',
                color: '#fdab3d'
            },
            {
                id: 's104',
                title: 'Waiting for review',
                color: '#0085ff',
            },
            {
                id: 'sNew',
                title: '',
                color: '#808080',
            },
        ],
        priorities: [
            {
                id: 'p101',
                title: 'High',
                color: '#e44258'
            },
            {
                id: 'p102',
                title: 'Medium',
                color: '#a358df',
            },
            {
                id: 'p103',
                title: 'Low',
                color: '#00ca72',
            },
            {
                id: 'pNew',
                title: '',
                color: '#808080',
            },
        ],
        members: [
            {
                _id: 'u101', 
                fullname: 'Shraga Puk',
                imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
            },
            {
                _id: 'u102', 
                fullname: 'Datia Puk',
                imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
            },
            {
                _id: 'u103', 
                fullname: 'Tuki Norma',
                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
            },
            {
                _id: 'u104', 
                fullname: 'Muki Abu Ja',
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPGD2nRVqluXRYoJdMRuczqzyorOJThR8Dg&usqp=CAU',
            },
            {
                _id: 'u105', 
                fullname: 'JSON De Parse',
                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
            },
            {
                _id: 'u106', 
                fullname: 'Nancy Williams',
                imgUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
            },
            {
                _id: 'u107', 
                fullname: 'Dan Willer',
                imgUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
            },
            {
                _id: 'u108', 
                fullname: 'Robert Wilford',
                imgUrl: 'https://randomuser.me/api/portraits/men/28.jpg',
            },
            {
                _id: 'u109', 
                fullname: 'Stephanie White',
                imgUrl: 'https://randomuser.me/api/portraits/women/42.jpg',
            },
            {
                _id: 'u110', 
                fullname: 'Dan Henderson',
                imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Problem Definition and Planning',
                tasks: [
                    {
                        id: 't101',
                        title: 'Identifying the scope and purpose of the prospect application  ',
                        members: [
                            {
                                _id: 'u101', 
                                fullname: 'Shraga Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
                            },
                            {
                                _id: 'u102', 
                                fullname: 'Datia Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u101',
                            fullname: 'Shraga Puk',
                            imgUrl:
                                'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        comments: [
                            {
                                id: 'c101',
                                update: 'Added the basic pages to the presentation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Shraga Puk',
                                     imgUrl:
                                   'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                            {
                                id: 'c102',
                                update: 'Fixed the layout of the current Highlights page',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u102', 
                                    fullname: 'Datia Puk',
                                    imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                                },
                            },
                        ],
                        statusId: 's103',
                        priorityId: 'p103',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't102',
                        title: 'Calculation of labor and other possible future costs of project',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's103',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't103',
                        title: 'Creation of proposed timetable with target goals',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's103',
                        priorityId: 'p102',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't104',
                        title: 'Assignment and preparation of the relevant project\'s working-teams',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c102',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't105',
                        title: 'Getting an initial feedback from client',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c102',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p102',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                ],
                color: '#8D0000',
            },
            {
                id: 'g102',
                title: 'Program Design',
                tasks: [
                    {
                        id: 't101',
                        title: 'Deciding of the Architecture to be used',
                        members: [
                            {
                                _id: 'u101', 
                                fullname: 'Shraga Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
                            },
                            {
                                _id: 'u102', 
                                fullname: 'Datia Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u101',
                            fullname: 'Shraga Puk',
                            imgUrl:
                                'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        comments: [
                            {
                                id: 'c101',
                                update: 'Added the basic pages to the presentation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Shraga Puk',
                                     imgUrl:
                                   'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                            {
                                id: 'c102',
                                update: 'Fixed the layout of the current Highlights page',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u102', 
                                    fullname: 'Datia Puk',
                                    imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                                },
                            },
                        ],
                        statusId: 's101',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't102',
                        title: 'Deciding of the relevant framework to be used',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c102',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't103',
                        title: 'Initial planning of the desired user interface',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c106',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p102',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't104',
                        title: 'Defining the platforms the software should run on',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's101',
                        priorityId: 'p102',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't105',
                        title: 'Understanding the desired flow of the program',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c107',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p103',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                ],
                color: '#77dbed',
            },
            {
                id: 'g103',
                title: 'Software development',
                tasks: [
                    {
                        id: 't101',
                        title: 'Creation of prototype and receiving an approval',
                        members: [
                            {
                                _id: 'u101', 
                                fullname: 'Shraga Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
                            },
                            {
                                _id: 'u102', 
                                fullname: 'Datia Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u101',
                            fullname: 'Shraga Puk',
                            imgUrl:
                                'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        comments: [
                            {
                                id: 'c101',
                                update: 'Added the basic pages to the presentation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Shraga Puk',
                                     imgUrl:
                                   'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                            {
                                id: 'c102',
                                update: 'Fixed the layout of the current Highlights page',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u102', 
                                    fullname: 'Datia Puk',
                                    imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                                },
                            },
                        ],
                        statusId: 's101',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't102',
                        title: 'Working on Pages and CMPS structure',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c109',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's103',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't103',
                        title: 'Creation of the main css layout',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c107',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                ],
                color: '#7cdb5c',
            },
            {
                id: 'g104',
                title: 'Testing and Debugging',
                tasks: [
                    {
                        id: 't101',
                        title: 'Assigning QA team with Coding team to work together',
                        members: [
                            {
                                _id: 'u101', 
                                fullname: 'Shraga Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
                            },
                            {
                                _id: 'u102', 
                                fullname: 'Datia Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u101',
                            fullname: 'Shraga Puk',
                            imgUrl:
                                'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        comments: [
                            {
                                id: 'c101',
                                update: 'Added the basic pages to the presentation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Shraga Puk',
                                     imgUrl:
                                   'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                            {
                                id: 'c102',
                                update: 'Fixed the layout of the current Highlights page',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u102', 
                                    fullname: 'Datia Puk',
                                    imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't102',
                        title: 'Mapping of where to use automated vs manual testings',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c109',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's103',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't103',
                        title: 'Commencing the testing/debugging cycle',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's101',
                        priorityId: 'p101',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                ],
                color: '#d1be30',
            },
            {
                id: 'g105',
                title: 'Deployment, Operation and Maintenance',
                tasks: [
                    {
                        id: 't101',
                        title: 'Initiating the deployment process, specifically to each relevant system',
                        members: [
                            {
                                _id: 'u101', 
                                fullname: 'Shraga Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
                            },
                            {
                                _id: 'u102', 
                                fullname: 'Datia Puk',
                                imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u101',
                            fullname: 'Shraga Puk',
                            imgUrl:
                                'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                        },
                        comments: [
                            {
                                id: 'c101',
                                update: 'Added the basic pages to the presentation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Shraga Puk',
                                     imgUrl:
                                   'http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg',
                                },
                            },
                            {
                                id: 'c102',
                                update: 'Fixed the layout of the current Highlights page',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u102', 
                                    fullname: 'Datia Puk',
                                    imgUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
                                },
                            },
                        ],
                        statusId: 's103',
                        priorityId: 'p102',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't102',
                        title: 'Constant attention to logged-in reported bugs',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p103',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't103',
                        title: 'Resolving newly discovered bugs- either on the spot or by initiating a new development phase',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c106',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's102',
                        priorityId: 'p103',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                    {
                        id: 't104',
                        title: 'Continued development of additional newly features for future releases',
                        members: [
                            {
                                _id: 'u103', 
                                fullname: 'Tuki Norma',
                                imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg',
                            },
                            {
                                _id: 'u105', 
                                fullname: 'JSON De Parse',
                                imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                            },
                        ],
                        byMember: {
                            _id: 'u103', 
                            fullname: 'Tuki Norma',
                            imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                        },
                        comments: [
                            {
                                id: 'c103',
                                update: 'Created a git depository and sent invitation',
                                file: 'http://some-img',
                                createdAt: 154514,
                                byMember: {
                                    _id: 'u103', 
                                    fullname: 'Tuki Norma',
                                    imgUrl: 'https://i.pinimg.com/originals/3f/9a/4e/3f9a4edcb4e19d9c68516f16cf546624.jpg'
                                },
                            },
                            {
                                id: 'c105',
                                update: 'Uploaded the first commit with the folders structure',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                    fullname: 'JSON De Parse',
                                    imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                            {
                                id: 'c107',
                                update: 'Finished the initial wire-connection, all looks in good working order',
                                file: 'http://some-img',
                                createdAt: 154574,
                                byMember: {
                                    _id: 'u105', 
                                     fullname: 'JSON De Parse',
                                   imgUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
                                },
                            },
                        ],
                        statusId: 's101',
                        priorityId: 'p102',
                        createdAt: 1590999730348,
                        dueDate: 16756215211,
                    },
                ],
                color: '#845EC2',
            },
        ],
        activities: [
            {
                id: 'a101',
                action: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                task: {
                    id: 't101',
                    title: 'Replace Logo',
                },
            },
        ],
    };
}
