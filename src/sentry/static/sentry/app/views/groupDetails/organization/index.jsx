import React from 'react';

import withOrganization from 'app/utils/withOrganization';
import Feature from 'app/components/acl/feature';

import GroupDetails from '../shared/groupDetails';

class OrganizationGroupDetails extends React.Component {
  render() {
    return (
      <Feature features={['sentry10']} renderDisabled>
        <GroupDetails {...this.props} />
      </Feature>
    );
  }
}

export default withOrganization(OrganizationGroupDetails);
