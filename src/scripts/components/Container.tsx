import Cascade, { Component } from 'cascade';

export interface IContainerProps {
    className?: string;
}

export default class ButtonGroups extends Component<IContainerProps>{
    render() {
        let classNames = this.props.className ? [this.props.className] : [];
        classNames.push('container');
        let className = classNames.join(' ');
        return <div className={className}>{this.children}</div>
    }
}