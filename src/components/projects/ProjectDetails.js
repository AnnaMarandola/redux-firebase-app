import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
            <img src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fee40d50a-58a2-4bf3-a2f1-26df2bfef858.2Ejpeg/748x372/quality/80/crop-from/center/pate-a-pizza-sans-gluten.jpeg"/>
                <span className="card-title">Project Title - {id} </span>
            <p>Spatio neque et quis Turpis rogati accipienda minime res accipienda accipienda sanciatur Etenim Turpis fecisse spatio Etenim lex de amicitia et et rem publicam neque curriculoque ut futuros Deflexit causa curriculoque minime de nec fateatur sanciatur in prospicere loco fateatur faciamus Deflexit rogemus amicitia nec nec tum oporteat Fanni peccatis spatio se curriculoque ceteris faciamus nec ut publicam et ut accipienda rem quis fecisse res iam est si sumus oporteat se longe locati rogati futuros spatio spatio tum peccatis tum amici ut in causa et ut Fanni sanciatur publicam lex fateatur de in si consuetudo excusatio fecisse lex et accipienda.</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
            <div>Posted by Anna</div>
            <div>11 février, 20:21</div>

            </div>
        </div>

        </div>
    )
}

export default ProjectDetails;
