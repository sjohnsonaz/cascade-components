import Cascade, { Component } from 'cascade';
import { Scrollable } from '../../../../../scripts/modules/ArtistryCascade';

export interface IScrollableViewProps {

}

export default class ScrollableView extends Component<IScrollableViewProps> {
    bottom = () => {
        console.log('bottom!');
    }
    render() {
        let values = [];
        for (let index = 0; index < 100; index++) {
            values.push(index);
        }
        return (
            <div>
                <Scrollable type="y" height="100px" buffer={10} onBottom={this.bottom}>
                    <ul>
                        {values.map(value => <li>{value}</li>)}
                    </ul>
                </Scrollable>
            </div>
        );
    }
}