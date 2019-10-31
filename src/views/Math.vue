<template>
    
<v-container>

        <v-layout row justify-center align-center wrap>
            <v-flex >
                <v-subheader id="language title" class="title mt-1">Math</v-subheader>

                <v-card class="auto-grow grey lighten-3 mx-5 mt-3" fluid v-for="cards in cards" :key="cards">
                    
                    <v-card-title primary-title height="100px">
                        <h3 class="mb-0 headline">
                            {{ cards.title }}
                        </h3>
                    </v-card-title>

                    <v-subheader class="pt-0 mt-0">
                        {{ cards.subheader }}
                    </v-subheader>

                     <v-card-text class="grow">
                        {{ cards.text }}
                    </v-card-text>

                </v-card>
                
            </v-flex>
        </v-layout>

    </v-container>

</template>

<script>
  export default {
    data: () => ({
        cards: [
            {title:"Algebra 1", subheader:"1 Credit - Open to Grades 9-12", text:"This standard first-year course in algebra includes the real number system, first degree equations of one or two variables, polynomials, graphing, quadratic equations, exponents and radicals. Students will learn to use symbolic forms to represent, model and analyze mathematical situations. (Algebra is a prerequisite for chemistry.)"},
            
            {title:"Modeling Our World 1", subheader:"1 Credit - Open to Grade 9", text:"This course focuses upon the use of modeling to represent mathematical and real-world contexts. The application and creation of mathematical models engages students in learning experiences that relates classroom mathematics to everyday life and decision-making. The content of the course focuses upon specific learning expectations defined in the Common Core State Standards for high school mathematics, particularly those standards emphasizing the use of mathematical modeling with linear and exponential functions. The course is intended to be taken concurrently with Algebra I, to provide supplemental learning opportunities for students needing additional support to be successful in Algebra I."},
            
            {title:"Geometry", subheader:"1 Credit - Open to Grades 9-12", text:"This course is designed to develop the ability to recognize and use geometric relations and to develop skills in deductive reasoning in math. The course includes elements of solid geometry, coordinate plane, concepts of transformation, rotation and symmetry. (Recommended by 4-year colleges.)"},

            {title:"Advanced Geometry", subheader:"1 Credit - Open to Grades 9-12", text:"Advanced Geometry explores mathematical concepts at a faster pace and a greater depth than Geometry. Students in this course will study a greater breadth of geometric concepts and a more formalized approach to proof writing than students in Geometry. This rigorous course is designed to prepare students who excel in mathematics for future honors courses. (Recommended by 4-year colleges.)"},

            {title:"Modeling Our World 2", subheader:"1 Credit - Open to Grades 10-12", text:"This course focuses upon the use of modeling to represent mathematical and real-world contexts. The application and creation of mathematical models engages students in learning experiences that relates classroom mathematics to everyday life and decision-making. The content of the course focuses upon specific learning expectations defined in the Common Core State Standards for high school mathematics, particularly those standards emphasizing the use of mathematical modeling with linear, exponential, quadratic and rational functions. The course is intended to be taken prior to Algebra II, to provide supplemental learning opportunities for students needing additional support to be successful in Algebra II."},

            {title:"Algebra 2", subheader:"1 Credit - Open to Grades 9-12", text:"In addition to a brief review of linear and quadratic functions from Algebra 1, this standard second-year algebra course explores more complex functions including composition, inverse, square root, absolute value, piecewise, higher degree polynomial, rational, exponential and logarithmic functions, and introduces measures of statistical analysis. (Recommended by 4-year colleges.)"},

            {title:"Advanced Algebra 2", subheader:"1 Credit - Open to Grades 9-12", text:"Advanced Algebra 2 is an accelerated and more rigorous second-year algebra course exploring a greater depth and breadth of mathematical concepts than Algebra 2. Students in this course will explore complex functions including composition, inverse, square root, absolute value, piecewise, higher degree polynomial, rational, exponential and logarithmic funcions, and introduces concepts from probability, statistics, advanced systems and matrices. This course is designed to prepare students who excel in mathematics for future advanced and AP courses. (Recommended by 4-year colleges.)"},

            {title:"Intro to College Math", subheader:"1 Credit - Open to Grades 10-12", text:"This course prepares students for any non-STEM college level math. Introduction to College Mathematics will focus upon topics from the Algebra, Functions, Geometry and Statistics domains of the Common Core State Standards with an emphasis on mathematical modeling and quantitative reasoning. Students will extend their understanding of high school mathematics concepts and apply that understanding in real-world problem solving situations and purely mathematical contexts."},

            {title:"Trigonometry / Precalculus", subheader:"0.5 Credit / 0.5 Credit - Open to Grades 10-12", text:"Trigonometry is designed for students who have a two-year background in algebra, including some coordinate geometry. This course provides intensive study of trigonometric functions, fundamental identities, trigonometric equations, inverse trigonometric functions, applications and polar coordinates. Pre-Calculus course extends the study of elementary functions. Graphs and properties of algebraic functions, transcendental functions, sequences and series, conics and limits are studied."},

            {title:"Advanced Trigonometry / Advanced Precalculus", subheader:"0.5 Credit / 0.5 Credit - Open to Grades 10-12", text:"Advanced Trigonometry: This is an accelerated course providing a more intensive study of trigonometry including trigonometric functions, fundamental identities, trigonometric equations, inverse trigonometric functions, vectors, polar coordinates and equations, and complex numbers. A solid foundation in algebra 2 and geometry is strongly recommended. Advanced Trigonometry is strongly recommended for students interested in taking AP Calculus BC. Advanced Pre-Calculus: This is an accelerated course providing a more intensive study of pre-calculus topics including conics, sequences and series, counting, probability, parametric equations, limits and derivatives. Additional emphasis is placed on integration of appropriate technology (e.g., graphing calculators). A solid foundation in Trigonometry, Algebra 2, and Geometry is strongly recommended. Advanced Pre-Calculus is strongly recommended for students interested in taking AP Calculus BC."},

            {title:"Probability / Statistics", subheader:"0.5 Credit / 0.5 Credit - Open to Grades 10-12", text:"Probability: This course focuses on the probability content standards with emphasis on developing probability concepts inherent in everyday situations experienced in investment, insurance, science, business, and technology. Emphasis is also placed on using probabilities in decision making. Laboratory experiences are provided. Statistics: This course provides students with an introduction to statistical issues and concerns and presents strategies for analyzing and interpreting data. This course addresses the statistics content standards and includes the following topics: graphs and charts, collection and organization of data, measures of central tendency and dispersion, uses and misuses of statistics, frequency distributions, correlation, and regression."},

            {title:"Calculus", subheader:"1 Credit - Open to Grades 11-12", text:"Calculus is the study of continuous change. This course is designed to prepare and introduce students to the topics covered in a typical college-level Calculus course. Topics include, but are not limited to, limits, derivatives of a variety of functions, applications of derivatives, definite and indefinite integration, and application of integrals. "},

            {title:"Advanced Placement (AP) Statistics", subheader:"1 Credit - Open to Grades 11-12", text:"This Course will introduce students to major concepts and tools for collecting, analyzing, and drawing conclusions from data. Students are exposed to four broad conceptual themes: exploring data, planning a study, anticipating patterns, and making statistical inferences. This course follows the recommended course syllabi provided through the Advanced Placement program of the College Board."},

            {title:"Advanced Placement (AP) Calculus AB", subheader:"1 Credit - Open to Grades 11-12", text:"This is a college-level course in calculus based on standards set forth by the College Board AP Program. Topics studied in depth include representations (graphical, numerical, analytical, verbal) of elementary functions, limits, continuity, derivatives, applications of derivatives, definite integrals, the Fundamental Theorem of Calculus, applications of definite integrals, slope fields, and first order separable differential equations. Before studying calculus, all students should have a firm foundation in linear, polynomial, rational, exponential, logarithmic, trigonometric, inverse trigonometric and piecewise functions. This course helps to prepare students for the AP Examination which is given in May."},

            {title:"Advanced Placement (AP) Calculus BC", subheader:"1 Credit - Open to Grades 11-12", text:"This is a college-level course in calculus based on standards set forth by the College Board AP Program. In addition to topics covered in AP Calculus AB, topics studied in depth also include L’Hôspital’s Rule, improper integrals, sequences and series, convergence, parametric funcions, vectors, and polar functions. Before studying calculus, all students should have a firm foundation in linear, polynomial, rational, exponential, logarithmic, trigonometric, inverse trigonometric and piecewise functions. Trigonometry/Pre-calculus Honors is strongly recommended. This course helps to prepare students for the AP Examination which is given in May"},

            //"template" {title:"", subheader:"", text:""},
        ]
    })
  }
</script>
