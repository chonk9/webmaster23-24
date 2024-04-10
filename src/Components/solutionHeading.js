export default function SolutionHeading({visual: Visual, solutionName, cost}) {
    return (<div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
      {Visual && <Visual style={{display: 'inline-block', width: '80px'}} />}
      <h3 style={{display: 'inline-block', marginBottom: 0, marginLeft: '10px'}}>{solutionName}</h3>
      {cost && cost}
    </div>)
}