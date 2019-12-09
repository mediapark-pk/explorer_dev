import { injectable } from 'inversify';
import { RouterStore } from 'mobx-react-router';
import { container } from 'src/core/di';

container.bind(injectable()(RouterStore)).toSelf();

export default container;
