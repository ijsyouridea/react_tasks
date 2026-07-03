Challenge 4 of 4: Submit a form without Effects 
This Form component lets you send a message to a friend. When you submit the form, the showForm state variable is set to false. This triggers an Effect calling sendMessage(message), which sends the message (you can see it in the console). After the message is sent, you see a “Thank you” dialog with an “Open chat” button that lets you get back to the form.

Your app’s users are sending way too many messages. To make chatting a little bit more difficult, you’ve decided to show the “Thank you” dialog first rather than the form. Change the showForm state variable to initialize to false instead of true. As soon as you make that change, the console will show that an empty message was sent. Something in this logic is wrong!

What’s the root cause of this problem? And how can you fix it?