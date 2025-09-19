# OrganizationGetInvitationGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**email** | **str** |  | 
**role** | **str** |  | 
**organization_id** | **str** |  | 
**inviter_id** | **str** |  | 
**status** | **str** |  | 
**expires_at** | **str** |  | 
**organization_name** | **str** |  | 
**organization_slug** | **str** |  | 
**inviter_email** | **str** |  | 

## Example

```python
from better_auth.models.organization_get_invitation_get200_response import OrganizationGetInvitationGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationGetInvitationGet200Response from a JSON string
organization_get_invitation_get200_response_instance = OrganizationGetInvitationGet200Response.from_json(json)
# print the JSON string representation of the object
print(OrganizationGetInvitationGet200Response.to_json())

# convert the object into a dict
organization_get_invitation_get200_response_dict = organization_get_invitation_get200_response_instance.to_dict()
# create an instance of OrganizationGetInvitationGet200Response from a dict
organization_get_invitation_get200_response_from_dict = OrganizationGetInvitationGet200Response.from_dict(organization_get_invitation_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


