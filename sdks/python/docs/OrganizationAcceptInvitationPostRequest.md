# OrganizationAcceptInvitationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation_id** | **str** | The ID of the invitation to accept | 

## Example

```python
from better_auth.models.organization_accept_invitation_post_request import OrganizationAcceptInvitationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationAcceptInvitationPostRequest from a JSON string
organization_accept_invitation_post_request_instance = OrganizationAcceptInvitationPostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationAcceptInvitationPostRequest.to_json())

# convert the object into a dict
organization_accept_invitation_post_request_dict = organization_accept_invitation_post_request_instance.to_dict()
# create an instance of OrganizationAcceptInvitationPostRequest from a dict
organization_accept_invitation_post_request_from_dict = OrganizationAcceptInvitationPostRequest.from_dict(organization_accept_invitation_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


