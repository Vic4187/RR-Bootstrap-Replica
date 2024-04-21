import React from 'react';
import { Card } from 'react-bootstrap';
import instacartBackground from "../instacartBackground.jpeg";

function Background() {
    return (
        <Card className="text-black d-flex" style={{ backgroundColor: '#DEEDD5', height: '300px', overflow: 'hidden' }}>
            <Card.ImgOverlay className="d-flex flex-column justify-content-center" style={{ flex: 1, paddingRight: '30%' }}>
                <Card.Title className="display-4 hero-title">Order groceries for <br /> delivery or pickup today</Card.Title>
                <Card.Text className="d-none d-sm-block">
                    Whatever you want from local stores, brought right to your door.
                </Card.Text>
            </Card.ImgOverlay>
            <Card.Img className="d-none d-sm-block" src={instacartBackground} alt="Background" style={{ position: 'absolute', right: 0, width: 'auto', height: '100%' }} />
        </Card>
    );
}

export default Background;