var admin = require("firebase-admin");

var serviceAccount = require("./jr-dd568-firebase-adminsdk-m8ki4-b43b69c917.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://jr-dd568.firebaseio.com"
});

var registrationToken = 'e6tmlXAwt9M:APA91bHmH56iYWOOgZYZXJarp7-Zy5IJJ6eTRYRGZAQJz9mBWj8TySR0XlU94Exv3A6kvH1GWKJqL4x5jSDd4qFDwUHjQXuo7PSeN2hqEysWjMIoIn5hv4G9z-8b-VSaiy_dW9m75nio';

// See documentation on defining a message payload.
var message = {
    data: {
        'title': '알람 서비스 테스트..',
        'body': '되나요..',
        'icon': 'firebase-logo.png',
        'click_action': 'http://localhost:8081'
    },
    token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
    .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });

