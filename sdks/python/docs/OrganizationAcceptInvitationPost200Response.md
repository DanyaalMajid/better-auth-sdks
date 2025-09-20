# OrganizationAcceptInvitationPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invitation** | **object** |  | [optional] 
**member** | **object** |  | [optional] 

## Example

```python
from better_auth.models.organization_accept_invitation_post200_response import OrganizationAcceptInvitationPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationAcceptInvitationPost200Response from a JSON string
organization_accept_invitation_post200_response_instance = OrganizationAcceptInvitationPost200Response.from_json(json)
# print the JSON string representation of the object
print(OrganizationAcceptInvitationPost200Response.to_json())

# convert the object into a dict
organization_accept_invitation_post200_response_dict = organization_accept_invitation_post200_response_instance.to_dict()
# create an instance of OrganizationAcceptInvitationPost200Response from a dict
organization_accept_invitation_post200_response_from_dict = OrganizationAcceptInvitationPost200Response.from_dict(organization_accept_invitation_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


