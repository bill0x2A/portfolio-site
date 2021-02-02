import React from 'react';
import classes from './Blog.module.css';
import MathJax from 'react-mathjax';

const tex = `f(x) = \\int_{-\\infty}^\\infty
    \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`

const Blog = () => (
    <MathJax.Provider>
        <div className={classes.Blog}>
            <h2>Lost in the SNARKs</h2>
            <p>A few weeks ago I was contacted by someone on Linkedin asking if I had any experience in implementing zk-SNARKs or rollups. While I absolutely <strong>did not </strong>
            have experience with this, I had heard about the technology and had some idea about its uses. I took it as a good oppertunity to make a connection and learn something new.
            </p>
            <p>After trying to have a glance through the inner workings of SNARKs I quickly became massively intimidated by what even Vitalk Buterien refers to as <a href="https://medium.com/@VitalikButerin/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649">"moon math"</a>. {"\n"}
            It looked a bit all or nothing, so I decided if I really wanted to understand this technology and forsee the potential uses of it I was going to have to roll up my sleeves and get dirty wallowing in some maths a touch beyond my paygrade.</p>
            
            <p>Searching a bit more I found an exellent <a href="https://electriccoin.co/blog/snark-explain/">series of articles</a> published on the Zcash website written by Ariel Gabizon. What follows are the notes I made working through those articles, nicely formatted and stored here so I can come back to them later.</p>
            <p>A lot of different ingredients go into baking this cake, and are complex enough on their own. When they are combined is where my brain really began to melt.</p>
            <h3>Holomorphic Hidings</h3>
            <p>This is a very core concept to making this all work, I was not familliar with any kind of group theory prior to this but only a small amount of knowledge is needed to make this work conceptually here, before applying it more directly later.</p>
            <p>A holomorphic function satisfies the following critera:</p>
            <ol>
                <li>For most <MathJax.Node inline formula={'x'}/>, is it hard to find <MathJax.Node inline formula={'x'}/> given <MathJax.Node inline formula={'E(x)'}/></li>
                <li>If <MathJax.Node inline formula={'x \\ne y'}/>, <MathJax.Node inline formula={'E(x) \\ne E(y)'}/>.</li>
                <li>Given <MathJax.Node inline formula={'E(x)'}/> and <MathJax.Node inline formula={'E(y)'}/>, it is possible to compute the hiding of arithmetic operations on <MathJax.Node inline formula={'x'}/> and <MathJax.Node inline formula={'y'}/> e.g. <MathJax.Node inline formula={'E(x + y)'}/> or <MathJax.Node inline formula={'E(x \\cdot y)'}/></li>
            </ol>
            <p>Maybe you can see why this would be central in proving knowledge without revealing your secrets.</p>
            <h4>Hiding Construction</h4>
            <p>Holomorphic hidings must be constructed from <strong>finite groups</strong>.</p>
            <p><MathJax.Node inline formula={'mod \\ x'}/> can be used on the set <MathJax.Node inline formula={'\\{0,...,n-1\\}'}/> to define an addition operation denoted:</p>
            <MathJax.Node formula={'2 + 3 = 1 (mod \\ 4)'}/>
            <p>We define <MathJax.Node inline formula={'\\mathbb{Z}_{n}'}/> as the set <MathJax.Node inline formula={'\\{0,...,n-1\\}'}/> including this addition operation.
            For a prime <MathJax.Node inline formula={'n'}/>, denoted <MathJax.Node inline formula={'p'}/> we may also simillarly define multiplication, keeping the result within <MathJax.Node inline formula={'\\{0,...,p-1\\}'}/>:</p>
            <MathJax.Node formula={'2 \\cdot 4 = 1 (mod \\ 7)'}/>
            <p>This set, with multiplication included as defined is denoted <MathJax.Node inline formula={'\\mathbb{Z}_{p}^{*}'}/> and has the following properties:</p>
            <ol>
                <li>It is a <strong>cyclic group </strong> - there is some element <MathJax.Node inline formula={'g'}/> within <MathJax.Node inline formula={'\\mathbb{Z}_{p}^{*}'}/> called the <strong>generator</strong> usch that all elements of <MathJax.Node inline formula={'\\mathbb{Z}_{p}^{*}'}/> can be expressed as <MathJax.Node inline formula={'g^{a}'}/> for <MathJax.Node inline formula={'a \\in \\mathbb{Z}_{p}^{*}'}/>.</li>
                <li>The discrete logarithm problem is hard in <MathJax.Node inline formula={'\\mathbb{Z}_{p}^{*}'}/> - when <MathJax.Node inline formula={'p'}/> is large, given <MathJax.Node inline formula={'h \\in \\mathbb{Z}_{p}^{*}'}/> it is hard to find an integer <MathJax.Node inline formula={'a \\in \\{0,...,p-2\\}'}/> such that <MathJax.Node inline formula={'g^{a} = h (mod \\ p)'}/>.</li>
                <li>As "exponents add when elements are multiplied" for <MathJax.Node inline formula={'a, b \\in \\{0,...,p-1\\}'}/> <MathJax.Node formula = {'g^{a}\\cdot g^{b} = g^{a + b (mod \\ p-1)}'}/></li>
            </ol>
            <p>This maps to our earlier definition of a holomorphic hiding function:</p>
            <MathJax.Node formula={'E(x) \\nrightarrow x'}/>
            <MathJax.Node formula={'E(x) \\ne E(y) \\  | \\  x \\ne y'}/>
            <MathJax.Node formula={'E(x) + E(y) \\rightarrow E(x + y) \\  etc.'}/>
            <p>Later we will choose a specific type of function that satisfies these and allows us to perform multiplication on set elements.</p>
            <h3>Blind Polynomial Evaluation</h3>
            <p>We define <MathJax.Node inline formula={'\\mathbb{F}_{p}'}/> as before : <MathJax.Node inline formula={'\\{0,..,p-1\\}'}/>, with addition and multiplication defined <MathJax.Node inline formula={'mod \\ p'}/>.</p>
            <p>A polynomial of degree <MathJax.Node inline formula={'d'}/> over <MathJax.Node inline formula={'\\mathbb{F}_{p}'}/> is expressed as:</p>
            <p style = {{textAlign:"center"}}><MathJax.Node inline formula={'P(X) = a_{0} + a_{1}X + a_{1}X^{2} + ...'}/> <MathJax.Node inline formula={'+ a_{d}X^{d} \\ \\ \\ (a_{0},...,a_{d} \\in \\mathbb{F}_{p})'}/></p>
            <p>If someone knows <MathJax.Node inline formula={'P(X)'}/>, <MathJax.Node inline formula={'P(s)'}/> is a linear combination of <MathJax.Node inline formula={'1, s,...,s^{d}'}/> with weights <MathJax.Node inline formula={'a_{0},...,a_{d}'}/>.</p>
            <h4>Blind Evaluation</h4>
            <p>Alice has <MathJax.Node inline formula={'P'}/> of degree <MathJax.Node inline formula={'d'}/>, Bob chooses a secret <MathJax.Node inline formula={'s'}/> and wants to know <MathJax.Node inline formula={'E(P(s))'}/>. We want to achieve this without Alice learning Bob's secret: <MathJax.Node inline formula={'s'}/>, or Bob learning Alice's secret function: <MathJax.Node inline formula={'P'}/> so :</p>
            <ol>
                <li>Bob sends Alice the hidings : <MathJax.Node inline formula={'E(1), E(s), ..., E(s^{d})'}/></li>
                <li>Alice computes <MathJax.Node inline formula={'E(P(s))'}/>, this is possible as <MathJax.Node inline formula={'E'}/> supports linear combination (addition) and <MathJax.Node inline formula={'E(P(s))'}/> is just a linear combination of the hidings sent by Bob, with the weights (which Alice has).</li>
            </ol>
            <p>We have achieved our goal - Alice can now send Bob <MathJax.Node inline formula={'E(P(s))'}/> without knowing <MathJax.Node inline formula={'s'}/> and Bob has not learned <MathJax.Node inline formula={'P(X)'}/>. Unfortunately, while Alice <strong>can</strong> truthfully calculate and return <MathJax.Node inline formula={'E(P(s))'}/> to Bob, he has no way of verifying that the compuation was performed correctly. Alice could just as easily have made up a random value. He requires a way to remove the need to trust Alice.</p>
            <p>We will return to this problem, but it requires the introduction of a new key ingredient into the batter.</p>
            <h3>Knowledge of Coefficient Test</h3>
            <p>For <MathJax.Node inline formula={'\\alpha \\in \\mathbb{F}^{*}_{p}'}/>, a pair of elements <MathJax.Node inline formula={'(a,b) \\in G'}/> will be called and <MathJax.Node inline formula={'\\alpha'}/>-pair if <MathJax.Node inline formula={'a,b \\ne 0'}/> and <MathJax.Node inline formula={'b = \\alpha \\cdot a'}/>. Here <MathJax.Node inline formula={'G'}/> is a group constructed from a generator <MathJax.Node inline formula={'g \\in \\mathbb{F}_{p}^{*}'}/>. The knowledge of coefficient test then preceeds as follows:</p>
            <ol>
                <li>Bob randomly chooses <MathJax.Node inline formula={'\\alpha \\in \\mathbb{F}^{*}_{p}'}/> and <MathJax.Node inline formula={'(a,b) \\in G'}/> before computing <MathJax.Node inline formula={'b = \\alpha \\cdot a'}/></li>
                <li>He sends Alice <MathJax.Node inline formula={'a'}/> and <MathJax.Node inline formula={'b'}/></li>
                <li>Alice must respond with <MathJax.Node inline formula={'\\dot a'}/> and <MathJax.Node inline formula={'\\dot b'}/> such that <MathJax.Node inline formula={'\\dot b = \\alpha \\cdot \\dot a'}/> and <MathJax.Node inline formula={'\\dot a \\ne a'}/>, <MathJax.Node inline formula={'\\dot b \\ne b'}/></li>
                <li>Bob confirms <MathJax.Node inline formula={'\\dot a, \\dot b'}/> is an <MathJax.Node inline formula={'\\alpha'}/>-pair</li>
            </ol>
            <p>The only information Alice has about <MathJax.Node inline formula={'a'}/> is <MathJax.Node inline formula={'\\alpha \\cdot a'}/> and <MathJax.Node inline formula={'G'}/> has a discrete hard logarithm problem, so Alice cannot simply find <MathJax.Node inline formula={'\\alpha = b \\div a'}/>. So then how does she generate <MathJax.Node inline formula={'\\dot a, \\dot b'}/>?</p>
            <p>Alice chooses <MathJax.Node inline formula={'\\gamma \\in \\mathbb{F}^{*}_{p}'}/>, and responds with <MathJax.Node inline formula={'\\dot a, \\dot b = \\gamma \\cdot a, \\gamma \\cdot b'}/>:</p>
            <p style = {{textAlign:"center"}}><MathJax.Node formula={'\\dot b = \\gamma \\cdot b = \\gamma \\cdot \\alpha \\cdot a'}/> <MathJax.Node inline formula={'\\alpha(\\gamma \\cdot a) = \\alpha \\cdot \\dot a'}/></p>
            <p>Thus <MathJax.Node inline formula={'\\dot a, \\dot b'}/> is an <MathJax.Node inline formula={'\\alpha'}/>-pair. Alice knows the ratio between <MathJax.Node inline formula={'\\dot a'}/> and <MathJax.Node inline formula={'a'}/>, <MathJax.Node inline formula={'(\\gamma)'}/>, and this can be proven with non-negligible probability over several choices of <MathJax.Node inline formula={'\\alpha'}/> and <MathJax.Node inline formula={'a'}/> by Bob. Note this procedure is not completely watertight, so just doing it once is not enough. It should be done many times, giving rise to...</p>
            <h4>Extended Knowledge of Coefficient Assumption (d-KCA)</h4>
            <p>Here Bob chooses <MathJax.Node inline formula={'\\alpha \\in \\mathbb{F}^{*}_{p}, s \\in \\mathbb{F}_{p}'}/> and sends Alice the <MathJax.Node inline formula={'\\alpha'}/>-pairs : </p>
            <p style = {{textAlign:"center"}}><MathJax.Node inline formula={'(g, \\alpha \\cdot g),(s\\cdot g, s\\cdot g \\cdot \\alpha)'}/>,<MathJax.Node inline formula = {'(s^{2}\\cdot g, \\alpha \\cdot s^{2}\\cdot g),...,(s^{d}\\cdot g, \\alpha \\cdot s^{d}\\cdot g)'}/></p>
            <p>Alice outputs <MathJax.Node inline formula={'(\\dot a, \\dot b)'}/>, such that <MathJax.Node inline formula={'\\dot b = \\alpha \\cdot \\dot a'}/> via a linear combination of the many <MathJax.Node inline formula={'\\alpha'}/>-pairs sent by Bob:</p>
            <MathJax.Node formula={'(\\dot a , \\dot b) = (\\sum^{d}_{i=0} c_{i} \\cdot a_{i}, \\sum^{d}_{i=0} c_{i} \\cdot b_{i})'}/>
            <p>With her choosing any <MathJax.Node inline formula={'c_{1},...,c_{d} \\in \\mathbb{F}_{p}'}/>. Now when she outputs <MathJax.Node inline formula={'\\dot a, \\dot b'}/> she proves with <strong>negligible</strong> probability that she knows <MathJax.Node inline formula={'c_{0},...,c_{d}'}/> such that <MathJax.Node inline formula={'\\sum^{d}_{i=0} c_{i} \\cdot s^{i} \\cdot g = \\dot a'}/>.</p>
            <p>One of the major issues with SNARKs and several other surrounding techniques is the reliance on this assumption, STARKs avoid this altogether but at the cost of a much larger proof size, amongst other things. A main point of research for improvements in this field are to do with balancing security assumptions, trust and prover and verifier times. That's probably best saved for another post though as the scope of this single page is large enough as is. Anyway...</p>
            <h3>Verifiable Blind Evaluation Protocol</h3>
            <p>In this case we will select our holomorphic hiding function to be <MathJax.Node inline formula={'E(x) = x \\cdot g'}/>, where <MathJax.Node inline formula={'g'}/> is a generator of <MathJax.Node inline formula={'G'}/>. For these circumstances the protocol is as follows:</p>
            <ol>
                <li>Bob sends Alice the <strong>hidings</strong> of <MathJax.Node inline formula={'1, s,..., s^{d}'}/> and <MathJax.Node inline formula={'\\alpha, \\alpha \\cdot s, \\alpha s^{2},...,\\alpha \\cdot s^{d}'}/></li>
                <li>Alice constructs <MathJax.Node inline formula={'a = P(s) \\cdot g'}/> and <MathJax.Node inline formula={'b = \\alpha \\cdot P(s) \\cdot g'}/> using these hidings.</li>
                <li>Bob checks <MathJax.Node inline formula={'b = \\alpha \\cdot a'}/>, accepting the proof only then.</li>
            </ol>
            <p>Given the coefficients of <MathJax.Node inline formula={'P, P(s)'}/> is a linear combination of <MathJax.Node inline formula={'g, s \\cdot g, ... , s^{d} \\cdot g'}/> and <MathJax.Node inline formula={'\\alpha \\cdot P(s)'}/> is a linear combination of <MathJax.Node inline formula={'\\alpha \\cdot g, \\alpha \\cdot s \\cdot g,...,\\alpha \\cdot s^{d} \\cdot g'}/>, so as in the previous blind evaluation example, they can be computed by Alice.</p>
            <p>By the d-KCA, if Alice constructs <MathJax.Node inline formula={'a'}/>, <MathJax.Node inline formula={'b'}/> succesfully, she almost surely knows <MathJax.Node inline formula={'c_{0},...,c_{d} \\in \\mathbb{F}_{p}'}/> such that:</p>
            <p><MathJax.Node inline formula={'a = \\sum^{d}_{i=0} c_{i} \\cdot s^{i} \\cdot g'}/></p>
            <p>In that case, <MathJax.Node inline formula={'a = P(s) \\cdot g'}/> for the polynomial <MathJax.Node inline formula={'P(X) = \\sum^{d}_{i=0} c_{i} \\cdot x^{i}'}/> which Alice knows.</p>
            <p>i.e. The probability Bob accepts with Alice not knowing <MathJax.Node inline formula={'P(X)'}/> is negligible. We may therefore say we have achieved our goal set out at the end of the blind polynomial evaluation section. We have the abiliy to calculate the result of a secret function using secret parameters and both parties can be satisfied everything was conducted above board. There is one caveat, the secret function must be a polynomial. Say we wanted to perform this action with a more complex system - say a sha3 hash function, or even a set of rules governing some DAO. We need a way to express complex functions as polynomials (or sets thereof).</p>
            <p>For this we will need an initially confusing but ultimatly brilliant and elegant technique...</p>
            <p style = {{textAlign : "center"}}>To be continued...</p>
        </div>
    </MathJax.Provider>
)

export default Blog;