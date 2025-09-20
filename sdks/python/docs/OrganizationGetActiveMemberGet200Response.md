# OrganizationGetActiveMemberGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**user_id** | **str** |  | 
**organization_id** | **str** |  | 
**role** | **str** |  | 

## Example

```python
from better_auth.models.organization_get_active_member_get200_response import OrganizationGetActiveMemberGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationGetActiveMemberGet200Response from a JSON string
organization_get_active_member_get200_response_instance = OrganizationGetActiveMemberGet200Response.from_json(json)
# print the JSON string representation of the object
print(OrganizationGetActiveMemberGet200Response.to_json())

# convert the object into a dict
organization_get_active_member_get200_response_dict = organization_get_active_member_get200_response_instance.to_dict()
# create an instance of OrganizationGetActiveMemberGet200Response from a dict
organization_get_active_member_get200_response_from_dict = OrganizationGetActiveMemberGet200Response.from_dict(organization_get_active_member_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


