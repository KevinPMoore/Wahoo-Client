//dummy data for front-end testing

const store = {
    user: {
        id: 1,
        userName: 'TestUser',
        password: 'Secret123',
        question_ids: [ 1 ],
        answer_ids: [ ],
        points: 0,
        averagePoints: 0
    },
    userList: [
        {
            id: 1,
            userName: 'TestUser',
            password: 'Secret123',
            question_ids: [ 1 ],
            answer_ids: [ ],
            points: 0,
            averagePoints: 0
        },
        {
            id: 2,
            userName: 'AnswerMaster',
            password: 'DoesNotM4tter',
            question_ids: [ ],
            answers_ids: [ ],
            totalPoints: 0,
            averagePoints: 0
        },
        {
            id: 3,
            userName: 'R34llyC0nfus3d',
            password: 'H4lpM30ut',
            question_ids: [ 2, 3, 4 ],
            answer_ids: [ ],
            points: 0,
            averagePoints: 0
        }
    ],
    questionList: [
        {
            id: 1,
            user_id: 1,
            timeCreated: new Date(),
            title: 'How do you ask a question?',
            moreInfo: 'Like, on Wahoo answers?',
            category: 'Computers',
            answer_ids: [ ]
        },
        {
            id: 2,
            user_id: 3,
            timeCreated: new Date(),
            title: 'How to grill cheese?',
            moreInfo: 'I m hungry',
            category: 'Food & Drink',
            answer_ids: [ ]
        },
        {
            id: 3,
            user_id: 3,
            timeCreated: new Date(),
            title: 'What is the sun',
            moreInfo: 'Cant tell by looking...',
            category: 'Science and Mathmatics',
            answer_ids: [ ]
        },
        {
            id: 4,
            user_id: 3,
            timeCreated: new Date(),
            title: 'Can I be the best Wahoo-er?',
            moreInfo: 'Like, on Wahoo answers?',
            category: 'Computers',
            answer_ids: [ ]
        }
    ],
    answerList: [
        {
            id: 1,
            user_id: 3,
            timeCreated: new Date(),
            content: '',
            best: false,
            points: 0,
        }
    ]
};

export default store;