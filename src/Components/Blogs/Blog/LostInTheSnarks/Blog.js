import React from 'react';
import classes from './Blog.module.css';
import MathJax from 'react-mathjax';
import arithmeticcircuit from '../../../../Assets/arithmeticcircuit.png';

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
            <p style = {{textAlign:"center"}}><MathJax.Node inline formula={'\\dot b = \\gamma \\cdot b = \\gamma \\cdot \\alpha \\cdot a'}/> <MathJax.Node inline formula={'\\alpha(\\gamma \\cdot a) = \\alpha \\cdot \\dot a'}/></p>
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
            <h3>Quadratic Arithmetic Programs</h3>
            <p>This method allows us to represent programs as sets of polynomials. Lets start with a visual represention of the basis of this method.</p>
            <h4>Arithmetic Circuits</h4>
            <div className={classes.ImageContainer}>
                <img src = {arithmeticcircuit}/>
            </div>
            <p>The key to understanding this is by paying close attention to the labels on the above diagram.</p>
            <ul>
                <li><MathJax.Node inline formula={'w_{1}'}/> is an outgoing wire going into <strong>more than one gate</strong>, yet it is only labelled <strong>once</strong>.</li>
                <li>Multiplication gates have <strong>only</strong> two inputs called <strong>left</strong> and <strong>right</strong>.</li>
                <li>We do not label the addition gate, or the wire leading it to the multiplication gate <MathJax.Node inline formula={'g_{2}'}/>. <MathJax.Node inline formula={'w_{1}'}/> and <MathJax.Node inline formula={'w_{2}'}/> are both the right input of <MathJax.Node inline formula={'g_{2}'}/>.</li>
            </ul>
            <p>A <strong>legal assignment</strong> for the circuit if of the form <MathJax.Node inline formula={'(C_{1}, ..., C_{5})'}/> where <MathJax.Node inline formula={'C_{4} = C_{1} \\cdot C_{2}'}/> and <MathJax.Node inline formula={'C_{5} = C_{4} \\cdot (C_{1} + C{3})'}/> in the case of the above circuit.</p>
            <p>Say alice is trying to prove that she knows <MathJax.Node inline formula={'(C_{1}, C_{2}, C_{3}) \\in \\mathbb{F}_{p}'}/> such that <MathJax.Node inline formula={'(C_{1} \\cdot C_{2}) \\cdot (C_{1} + C_{3}) = 7'}/>. </p>
            <p>In the terminology of arithmetic circuits, Alice wants to prove she knows a legal assignment <MathJax.Node inline formula={'(C_{1}, ..., C_{5})'}/> such that <MathJax.Node inline formula={'C_{5} = 7'}/>. We now have to translate this to a statement about polynomials using a Quadratic Arithmetic Program.</p>
            <h4>Quadratic Arithmetic Programs</h4>
            <p><MathJax.Node inline formula={'g_{1}'}/> and <MathJax.Node inline formula={'g_{2}'}/> are associated with field elements:</p>
            <p style={{textAlign:"center"}}><MathJax.Node inline formula={'1 \\in \\mathbb{F}_{p}'}/> and <MathJax.Node inline formula={'2 \\in \\mathbb{F}_{p}'}/>, respectively.</p>
            <p>We now call <MathJax.Node inline formula={'\\{1,2\\}'}/> our <strong>target points</strong> and define 3 sets of polynomicals : left, right and output:</p>
            <p style={{textAlign:"center"}}><MathJax.Node inline formula={'L_{1}...L_{5}'}/>, <MathJax.Node inline formula={'R_{1}...R_{5}'}/>, <MathJax.Node inline formula={'O_{1}...O_{5}'}/></p>
            <p>The goal of this is to have the evaluated polynomials usually be 0 on the target points, <strong>except</strong> the ones involved in the target points multiplication gate. In our case, <MathJax.Node inline formula={'w_{1}, w{2}, w_{4}'}/> are the left, right and output wires of <MathJax.Node inline formula={'g_{1}'}/>, respectively.</p>
            <p>Hence we define: <MathJax.Node inline formula={'L_{1} = R_{2} = O_{4} = 2 - X'}/>, choosing 2 - X becasue it gives 1 at the point <MathJax.Node inline formula={'g_{1}'}/> and 0 at <MathJax.Node inline formula={'g_{2}'}/>.</p>
            <p>In a simillar way: <MathJax.Node inline formula={'L_{4} = R_{1} = R_{3} = O_{5} = X - 1'}/>, because X - 1 gives 1 at <MathJax.Node inline formula={'g_{2}'}/> and 0 at <MathJax.Node inline formula={'g_{1}'}/>.</p>
            <p>Make sure you understand the connection between these equations and the arithmetic circuit diagram, a bit of staring at them helps. The remainder of the polynomials are set as 0 (or the zero polynomial).</p>
            <p>Taking the fixed values from our legal assignment <MathJax.Node inline formula={'(C_{1}...C{5})'}/>, we can define left, right and output 'sum' polynomials : </p>
            <p className = {classes.SpaceSplit}><MathJax.Node inline formula={'L:=\\sum_{i=1}^{5} C_{i} \\cdot L_{i}'}/> <MathJax.Node inline formula={'R:=\\sum_{i=1}^{5} C_{i} \\cdot R_{i}'}/> <MathJax.Node inline formula={'O:=\\sum_{i=1}^{5} C_{i} \\cdot O_{i}'}/></p>
            <p>We then use these to define : <MathJax.Node inline formula={'P:=L \\cdot R - O'}/>.</p>
            <p>Here's the key : <MathJax.Node inline formula={'C_{1}...C{5}'}/> is a legal assignment to the circuit <strong>only</strong> if P vanishes on all the target points:</p>
            <p><MathJax.Node inline formula={'L(1) = C_{1} \\cdot L_{1}(1) + 0 + 0 + 0 + 0= C_{1}'}/></p>
            <p><MathJax.Node inline formula={'R(1) = 0 + C_{2} \\cdot R_{2}(1) + 0 + 0 + 0 = C_{2}'}/></p>
            <p><MathJax.Node inline formula={'O(1) = 0 + 0 + 0 + C_{4} \\cdot O_{4}(1) + 0 = C_{4}'}/></p>
            <p>Hence, <MathJax.Node inline formula={'P(1) = (C_{1} \\cdot C_{2}) - C_{4} = 0'}/></p>
            <p>Simillarly, <MathJax.Node inline formula={'P(2) = C_{4} \\cdot (C_{1} \\cdot C_{3}) - C_{5} = 0'}/></p>
            <p>Cool, right? Including the zeros made it make much more sense to me initally so I have included them here.</p>
            <h4>Target Polynomials</h4>
            <p>For a polynomial <MathJax.Node inline formula={'P'}/> and a point <MathJax.Node inline formula={'a \\in \\mathbb{F}_{p}'}/> we have <MathJax.Node inline formula={'P(a) = 0'}/> <strong>only</strong> if the polynomial <MathJax.Node inline formula={'X-a'}/> <strong>divides</strong> <MathJax.Node inline formula={'P'}/>, meaning:</p>
            <p><MathJax.Node inline formula={'P = (X-a) \\cdot H'}/> for some polynomial <MathJax.Node inline formula={'H'}/>.</p>
            <p>We define our <strong>target polynomial</strong> <MathJax.Node inline formula={'T:=(X-1)(2-X)'}/>, we can state that <MathJax.Node inline formula={'T'}/> divides <MathJax.Node inline formula={'P'}/> <strong>only</strong> if <MathJax.Node inline formula={'C_{1}...C_{5}'}/> is a legal assignment.</p>
            <p>We now have all of our basic ingredients for a SNARK, now we need to mix them up and add some decoration. There are many ways of doing this but here we give a full run through of one of the first SNARKs.</p>
            <h3>The Pinocchio Protocol</h3>
            <p>If Alice has a satisfying assignment, there exists a polynomial <MathJax.Node inline formula={'H'}/>, such that <MathJax.Node inline formula={'P(s) = T(s) \\cdot H(s), s \\in \\mathbb{F}_{p} '}/>.</p>
            <p>Suppose Alice does <strong>not</strong> have a satisfying assignment but still constructs <MathJax.Node inline formula={'P'}/>, we are guarenteed that <MathJax.Node inline formula={'T'}/> does not divide <MathJax.Node inline formula={'P'}/>.</p>
            <p>Thus, for any polynomial <MathJax.Node inline formula={'H'}/> of maximum degree <MathJax.Node inline formula={'d-2'}/>, <MathJax.Node inline formula={'P'}/> and <MathJax.Node inline formula={'L,R,O,H'}/> will be different polynomials.</p>
            <p>The <a href="https://rjlipton.wordpress.com/2009/11/30/the-curious-history-of-the-schwartz-zippel-lemma/">Schwatz-Zippel Lemma</a> states that differing polynomials of maximum degree <MathJax.Node inline formula={'2d'}/> agree on, at most <MathJax.Node inline formula={'2d'}/> points <MathJax.Node inline formula={'s \\in \\mathbb{F}_{p}'}/>. Thus when <MathJax.Node inline formula={'P >> 2d'}/>, the probability that <MathJax.Node inline formula={'P(s) = T(s) \\cdot H(s)'}/> for a random <MathJax.Node inline formula={'s'}/> is very small.</p>
            <p>We therefore suggest the following for Alice to prove the assignment:</p>
            <ol>
                <li>Alice chooses polynomials <MathJax.Node inline formula={'L, R, O, H'}/> of maximum degree <MathJax.Node inline formula={'d'}/>.</li>
                <li>Bob chooses a random point <MathJax.Node inline formula={'s \\in \\mathbb{F}_{p}'}/> and computes <MathJax.Node inline formula={'E(T(s))'}/> (loosely equivalent to <MathJax.Node inline formula={'X-a'}/><MathJax.Node inline formula={'\\alpha'}/> in the KCA, covered earlier).</li>
                <li>Alice sends Bob the hidings of her polynomials, evaluated at <MathJax.Node inline formula={'s'}/>:<MathJax.Node inline formula={'[E(L(s)), E(R(s)), E(O(s))], E(H(s))'}/> (b and a in the KCA).</li>
                <li>Bob checks if the desired equation holds at <MathJax.Node inline formula={'s'}/>: <MathJax.Node inline formula={'E(L(s) \\cdot R(s) - O(s)) ='}/><MathJax.Node inline formula={'E(T(s) \\cdot H(s))'}/>.</li>
            </ol>
            <h4>Enforcing consistent assignment usage</h4>
            <p>If Alice lacks a satisfying assignment, she could still construct <MathJax.Node inline formula={'L, R, O, H'}/> such that <MathJax.Node inline formula={'L \\cdot R - O = T \\cdot H'}/>, she just can't generate <MathJax.Node inline formula={'L, R'}/> and <MathJax.Node inline formula={'O'}/> from the <strong>same</strong> <MathJax.Node inline formula={'(C_{1}...C_{m})'}/>. The above protocol only checks that <MathJax.Node inline formula={'L, R, O'}/> are of the right degree, so we combine them:</p>
            <p><MathJax.Node inline formula={'F = L + X^{d+1} \\cdot R + X^{2(d+1)} \\cdot O'}/></p>
            <p>The point of the <MathJax.Node inline formula={'X'}/> terms here is to ensure the coefficients of the sub polynomials do not mix in <MathJax.Node inline formula={'F'}/>.</p>
            <p>We define simillar polynomials <MathJax.Node inline formula={'F'}/> for each <MathJax.Node inline formula={'i \\in \\{1,...,m\\}'}/> in the QAP:</p>
            <p><MathJax.Node inline formula={'F_{i} = L_{i} + X^{d+1} \\cdot R_{i} + X^{2(d+1)} \\cdot O_{i}'}/></p>
            <p>Note when we sum <MathJax.Node inline formula={'F'}/>s, the coefficients also 'sum separately':</p>
            <p><MathJax.Node inline formula={'F_{1} + F_{2} ='}/><MathJax.Node inline formula={'(L_{1} + L_{2}) + X^{d+1} \\cdot (R_{1} + R_{2})'}/><MathJax.Node inline formula={'+ X^{2(d+1)} \\cdot (O_{1} + O_{2})'}/></p>
            <p>More generally, suppose <MathJax.Node inline formula={'F'}/> was a linear combination of the <MathJax.Node inline formula={'F_{i}'}/>s:</p>
            <p style={{textAlign:"center"}}><MathJax.Node inline formula={'\\sum_{i=1}^{m} C_{i} \\cdot F_{i}'}/> for the same coefficients <MathJax.Node inline formula={'(C_{1}...C{m})'}/>.</p>
            <p>This would guarentee <MathJax.Node inline formula={'L, R, O'}/> were created from a single assignment.</p>
            <p>Bob will therefore ask Alice to prove <MathJax.Node inline formula={'F'}/> is such a linear combination as such. Bob chooses a random <MathJax.Node inline formula={'\\beta \\in \\mathbb{F}_{p}^{*}'}/> and sends Alice the hidings:</p>
            <p><MathJax.Node inline formula={'E(\\beta \\cdot F_{1}(s))'}/>...<MathJax.Node inline formula={'E(\\beta \\cdot F_{m}(s))'}/></p>
            <p>If Alice can succeed in returning the element <MathJax.Node inline formula={'E(\\beta \\cdot F(s))'}/>, she proves <MathJax.Node inline formula={'F'}/> is a linear combination of <MathJax.Node inline formula={'F_{i}'}/>s, proving her assignment is consistent across <MathJax.Node inline formula={'L, R, O'}/> (d-KCA).</p>
        </div>
    </MathJax.Provider>
)

export default Blog;