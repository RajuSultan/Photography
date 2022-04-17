import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 style={{ color: "goldenrod" }} className=' text-center my-5'>BLOGS</h1>
            <div class="accordion container my-5" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Difference between authorization and authentication.
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. <br />
                            Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.
                            <br />
                            Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Firebase by Google is used for the following: base of operations manages all information time period within the info. So, the exchange of knowledge to and fro from the info is straightforward and fast. Hence, if you're trying to develop mobile apps like live streaming, chat electronic messaging, etc., you can use firebase.
                            <br />
                            Authentication methods include something users know, something users have and something users are.Not each authentication sort is formed adequate to defend the network, however; these authentication strategies vary from giving basic protection to stronger security.
                            Options are:
                            <br />
                            #Drop-in authentication solution
                            <br />
                            #Email and password based authentication
                            <br />
                            #Federated identity provider integration
                            <br />
                            #Phone number authentication
                            <br />
                            #Custom auth system integration
                            <br />
                            #Anonymous auth
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            There are many services which Firebase provides, Most useful of them are:
                            <br />
                            Cloud Firestore.
                            <br />
                            Cloud Functions.
                            <br />
                            Hosting.
                            <br />
                            Cloud Storage.
                            <br />
                            Google Analytics.
                            <br />
                            Predictions.
                            <br />
                            Cloud Messaging.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;