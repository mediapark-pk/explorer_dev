import { singleton } from 'src/container';
import DelegatesRatingRepository from 'src/pages/delegates/repository/DelegatesRatingRepository';
import { computed } from 'mobx';

@singleton
export default class RatingMapModel  {

    constructor(
        private readonly repository: DelegatesRatingRepository,
    ) { }

    @computed
    get delegates() {
        return this.repository.data;
    }
}
