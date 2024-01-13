import '../ComponentStyles/windAnimation.css';

export default function WindAnimation(props) {
    return (<>
        <svg className="wind-animation" viewBox="2 0 20 10" style={props.style}>
            <path className="wind-path no-fill" strokeWidth="0.1" stroke="black" d="M 5 5 L 12 5 C 14.574 5.035 15.019 2.876 14 2 C 13.247 1.295 11.98 2.112 12 3"></path>
            <path className="wind-path no-fill" strokeWidth="0.1" stroke="black" d="M 3.555 5.707 L 17.779 5.743 C 19.255 5.712 18.985 4.162 18.511 3.754 C 17.863 3.17 16.428 3.604 16.637 4.604"></path>
            <path className="wind-path no-fill" strokeWidth="0.1" stroke="black" d="M 6.874 6.504 L 14.704 6.504 C 17.293 6.504 16.866 8.225 16.067 8.624 C 14.636 9.29 13.405 7.626 14.536 7.259"></path>
        </svg>
    </>)
}