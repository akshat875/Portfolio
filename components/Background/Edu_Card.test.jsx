const React = require('react');
const { render, screen } = require('@testing-library/react');
const EduCard = require('./Edu_Card');

test('renders EduCard component', () => {
    render(<EduCard />);
    const element = screen.getByText(/some text in EduCard/i);
    expect(element).toBeInTheDocument();
});