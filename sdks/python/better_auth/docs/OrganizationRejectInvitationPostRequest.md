# OrganizationRejectInvitationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation_id** | **str** | The ID of the invitation to reject | 

## Example

```python
from better_auth.models.organization_reject_invitation_post_request import OrganizationRejectInvitationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationRejectInvitationPostRequest from a JSON string
organization_reject_invitation_post_request_instance = OrganizationRejectInvitationPostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationRejectInvitationPostRequest.to_json())

# convert the object into a dict
organization_reject_invitation_post_request_dict = organization_reject_invitation_post_request_instance.to_dict()
# create an instance of OrganizationRejectInvitationPostRequest from a dict
organization_reject_invitation_post_request_from_dict = OrganizationRejectInvitationPostRequest.from_dict(organization_reject_invitation_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


