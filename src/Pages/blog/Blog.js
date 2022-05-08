import React from "react";

const Blog = () => {
    return (
        <div className="container mx-auto md:w-[80%] p-6">
            <div className="mb-4">
                <h1 className="text-2xl">
                    Ques-1: Differences between sql and nosql databases.
                </h1>
                <p className="text-base">
                    Ans: Sql stands for structure query language. On the other
                    hand, nosql is non tabular database. <br /> in sql
                    databases, data are stored in rowm colum based table. For
                    uniqueness, here is use diffrent types of keys, like primary
                    key , foren key etc. <hr />
                    In no sql databases, data are stored in a collection
                    form.Each item of collection has a unique key for
                    identifying. <br /> Some popular sql database are MySQL,
                    Oracle, PostgreSQL and MongoDB is one of best nosql database
                </p>
            </div>
            <div className="mb-4">
                <h1 className="text-2xl">
                    Ques-3: Difference between javascript and nodejs.
                </h1>
                <p className="text-base">
                    Ans: JavaScript high level programming language, which is
                    itially used for frontend activty. But recently javascript
                    used widely both front and backend.
                    <br /> On the other hand nodejs is js runtime enviroment,
                    which helps js to run both frontend and backend.
                    <br />
                    React.js, Vue.js etc are javascript frameworks, on the
                    contrary, express.js in node js framework.
                </p>
            </div>
            <div className="mb-4">
                <h1 className="text-2xl">
                    Ques-3: When should you use nodejs and when should you use
                    mongodb
                </h1>
                <p className="text-base">
                    Ans: As a nodejs is run time environment for javascript, so
                    nodejs is must be needed in wheater is frontend application
                    or backend.
                    <br /> In a project we are frequently use npm, if nodejs are
                    not installed then it was not possible run npm.,
                    <br /> In a project when we need to database for storing
                    info, then we use mongodb.
                </p>
            </div>
        </div>
    );
};

export default Blog;
