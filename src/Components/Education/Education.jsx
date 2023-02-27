import React, { useState } from 'react'
import Certificates from './Certificates/Certificates.jsx';
import Educations from './Educations/Educations.jsx';
import Habilities from './Habilities/Habilities.jsx';
import { Container, Content, ContentList, Link, List, Nav } from './EducationStyle'
import './EducationStyle.css'

const Education = () => {

    const [isShow, setIsShow] = useState(false);
    const [typeComponent, setTypeComponent] = useState()
    const handleClick = (value) => {
        // 👇️ toggle shown state
        console.log(value)
        setTypeComponent(value)
        setIsShow(current => !current);
        // 👇️ or simply set it to true
        // setIsShown(true);
    };
    return (
        <div>
            <Container>
                <Content>
                    <header>
                        <Nav>
                            <ContentList>
                                <List>
                                    <Link onClick={() => handleClick('habilities')}>Habilidades</Link>
                                </List>
                                <List>
                                    <Link onClick={() => handleClick('education')}>Educación</Link>
                                </List>
                                <List>
                                    <Link onClick={() => handleClick('certifies')}>Certificados</Link>
                                </List>
                            </ContentList>
                        </Nav>
                    </header>
                </Content>
                <div>
                    {
                        typeComponent === 'habilities' ? isShow && <Habilities /> : typeComponent === 'education' ? isShow && <Educations /> : typeComponent === 'certifies' ? isShow && <Certificates /> : !isShow
                    }
                </div>
            </Container>
        </div>
    )
}

export default Education