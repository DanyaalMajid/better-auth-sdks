# OrganizationRejectInvitationPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation** | **object** |  | [optional] 
**member** | **object** |  | [optional] 

## Example

```python
from better_auth.models.organization_reject_invitation_post200_response import OrganizationRejectInvitationPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationRejectInvitationPost200Response from a JSON string
organization_reject_invitation_post200_response_instance = OrganizationRejectInvitationPost200Response.from_json(json)
# print the JSON string representation of the object
print(OrganizationRejectInvitationPost200Response.to_json())

# convert the object into a dict
organization_reject_invitation_post200_response_dict = organization_reject_invitation_post200_response_instance.to_dict()
# create an instance of OrganizationRejectInvitationPost200Response from a dict
organization_reject_invitation_post200_response_from_dict = OrganizationRejectInvitationPost200Response.from_dict(organization_reject_invitation_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


