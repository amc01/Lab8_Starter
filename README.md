# Lab 8 - Starter

1. Within a Github action that runs whenever code is pushed 
    You want to test all of your code before the code is merged with the main branch. You also want automation so manually running
    your code is not the best. You also would not want to test your code after all development has been completed since you won't
    be able to catch the bugs during development. 

2. No

3. You would not use a unit test for this. You want want to do end to end testing to ensure that a message sent on one end of received
   on the other end. You might be able to write unit tests to check individual component of the message feature, but the message feature
   as a whole should not be checked with a unit test.

4. You would use a unit test for max message length. You can check to see if an error is thrown when the message length is longer than
   80 characters. Since max message length is a component of the message feature, you should use a unit test to see if this part
   of the message feature works as expected.