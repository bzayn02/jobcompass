import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import MainLayout from '../components/layout/MainLayout';

function TooltipPositionedExample() {
    return (
        <>
            <MainLayout>
                <div className="fs-3 ">
                    Add new skill <i class="fa-solid fa-plus"></i>
                </div>
                {['React', 'Node', 'CSS', 'JavaScript'].map((placement) => (
                    <OverlayTrigger
                        className="w-7 m-7"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Tooltip
                                className="p-3 w-6"
                                id={`tooltip-${placement}`}
                            >
                                Tooltip on <strong>{placement}</strong>.
                            </Tooltip>
                        }
                    >
                        <Button variant="secondary" className="m-4">
                            {placement}
                        </Button>
                    </OverlayTrigger>
                ))}
            </MainLayout>
        </>
    );
}

export default TooltipPositionedExample;
