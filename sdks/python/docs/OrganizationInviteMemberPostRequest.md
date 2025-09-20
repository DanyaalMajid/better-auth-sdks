# OrganizationInviteMemberPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the user to invite | 
**role** | **str** | The role(s) to assign to the user. It can be &#x60;admin&#x60;, &#x60;member&#x60;, or &#x60;guest&#x60;. Eg: \&quot;member\&quot; | 
**organization_id** | **str** | The organization ID to invite the user to | [optional] 
**resend** | **bool** | Resend the invitation email, if the user is already invited. Eg: true | [optional] 
**team_id** | **str** |  | 

## Example

```python
from better_auth.models.organization_invite_member_post_request import OrganizationInviteMemberPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationInviteMemberPostRequest from a JSON string
organization_invite_member_post_request_instance = OrganizationInviteMemberPostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationInviteMemberPostRequest.to_json())

# convert the object into a dict
organization_invite_member_post_request_dict = organization_invite_member_post_request_instance.to_dict()
# create an instance of OrganizationInviteMemberPostRequest from a dict
organization_invite_member_post_request_from_dict = OrganizationInviteMemberPostRequest.from_dict(organization_invite_member_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


