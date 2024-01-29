export default function SolutionHeading({visual: Visual, solutionName}) {
    return (<div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
      <Visual style={{display: 'inline-block', width: '80px'}} />
      <h3 style={{display: 'inline-block', marginBottom: 0, marginLeft: '10px'}}>{solutionName}</h3>
    </div>)
}