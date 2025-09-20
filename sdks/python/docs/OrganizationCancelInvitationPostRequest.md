# OrganizationCancelInvitationPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation_id** | **str** | The ID of the invitation to cancel | 

## Example

```python
from better_auth.models.organization_cancel_invitation_post_request import OrganizationCancelInvitationPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationCancelInvitationPostRequest from a JSON string
organization_cancel_invitation_post_request_instance = OrganizationCancelInvitationPostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationCancelInvitationPostRequest.to_json())

# convert the object into a dict
organization_cancel_invitation_post_request_dict = organization_cancel_invitation_post_request_instance.to_dict()
# create an instance of OrganizationCancelInvitationPostRequest from a dict
organization_cancel_invitation_post_request_from_dict = OrganizationCancelInvitationPostRequest.from_dict(organization_cancel_invitation_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


