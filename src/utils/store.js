//dummy data for front-end testing

const store = {
    user: {
        id: 1,
        userName: 'TestUser',
        password: 'Secret123',
        questions: [ 1 ],
        answers: [ ],
        points: 0,
        averagePoints: 0
    },
    userList: [
        {
            id: 1,
            userName: 'TestUser',
            password: 'Secret123',
            questions: [ 1 ],
            answers: [ ],
            points: 0,
            averagePoints: 0
        },
        {
            id: 2,
            userName: 'AnswerMaster',
            password: 'DoesNotM4tter',
            questions: [ ],
            answers: [ ],
            totalPoints: 0,
            averagePoints: 0
        },
        {
            id: 3,
            userName: 'R34llyC0nfus3d',
            password: 'H4lpM30ut',
            questions: [ 2, 3, 4 ],
            answers: [ ],
            points: 0,
            averagePoints: 0
        }
    ],
    questions: [
        {
            id: 1,
            user_id: 1,
            title: '',
            moreInfo: '',
            category: '',
            answers: [ ]
        }
    ],
    answers: [
        {
            id: 1,
            user_id: 3,
            content: '',
            best: false,
            points: 0,
        }
    ]
};

export default store;