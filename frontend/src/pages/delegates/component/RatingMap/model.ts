import { singleton } from 'src/container';
import { DelegatesRepository } from 'src/common/repository/DelegatesRepository';
import { computed } from 'mobx';

@singleton
export default class RatingMapModel  {

    constructor(
        private readonly repository: DelegatesRepository,
    ) { }

    @computed
    get delegates() {
        return this.repository.data;
    }
}
