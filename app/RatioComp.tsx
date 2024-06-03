import { Ratio, Stack } from "react-bootstrap";

export default function RatioComp(){
    function getDimensionsFromRatio(ratio :any) {
        const parts = ratio.split('x');
        const width = parseInt(parts[0]);
        const height = parseInt(parts[1]);
        const dimensions = `${width * 100}px x ${height * 100}px`; // Assuming each unit represents 100px
        return dimensions;
      }
      
    return(
        <>
        {['1x1', '4x3', '16x9', '21x9'].map((ratio) => (
        <Stack direction="horizontal" gap={2}>
        <Ratio key={ratio} aspectRatio={ratio}>
      <div style={{ color: 'white', fontSize: '16px', padding: '8px' }}>
        {ratio} ({getDimensionsFromRatio(ratio)})
      </div>
        </Ratio>
        </Stack>
))}
        </>
    )

}