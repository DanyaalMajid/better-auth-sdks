# OrganizationRemoveMemberPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_id_or_email** | **str** | The ID or email of the member to remove | 
**organization_id** | **str** | The ID of the organization to remove the member from. If not provided, the active organization will be used. Eg: \&quot;org-id\&quot; | [optional] 

## Example

```python
from better_auth.models.organization_remove_member_post_request import OrganizationRemoveMemberPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationRemoveMemberPostRequest from a JSON string
organization_remove_member_post_request_instance = OrganizationRemoveMemberPostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationRemoveMemberPostRequest.to_json())

# convert the object into a dict
organization_remove_member_post_request_dict = organization_remove_member_post_request_instance.to_dict()
# create an instance of OrganizationRemoveMemberPostRequest from a dict
organization_remove_member_post_request_from_dict = OrganizationRemoveMemberPostRequest.from_dict(organization_remove_member_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


